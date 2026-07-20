import { test, expect } from '@playwright/test'

// The database page talks to an external API (appConfig.dbApiBaseUrl), which
// isn't part of this repo, so it's mocked at the network layer rather than run
// against a real backend.
test('searching the comic database renders results from the API', async ({
  page,
}) => {
  await page.route('**/search-web', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          id: 1,
          title: 'Fun Home',
          issue: '',
          cover: null,
          creators: [],
        },
      ]),
    })
  })

  await page.goto('/de/database')

  await page.locator('#inputField').fill('Bechdel')

  // SearchForm debounces input for 500ms before firing the search request.
  await expect(page.locator('.font-titel')).toContainText('Fun Home', {
    timeout: 5000,
  })
})

test('search results clear when the input is reset', async ({ page }) => {
  await page.route('**/search-web', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, title: 'Fun Home', issue: '', cover: null, creators: [] },
      ]),
    })
  })

  await page.goto('/de/database')
  await page.locator('#inputField').fill('Bechdel')
  await expect(page.locator('.font-titel')).toContainText('Fun Home')

  await page.locator('.reset-btn-hover').click()

  await expect(page.locator('.font-titel')).toHaveCount(0)
})
