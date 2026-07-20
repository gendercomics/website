import { test, expect } from '@playwright/test'

test('switching language updates the URL prefix', async ({ page }) => {
  await page.goto('/de/about')
  await expect(page).toHaveURL(/\/de\/about/)

  // The nav (and the language switcher inside it) is hidden behind the burger
  // menu by default - navStore.navbarVisible starts false. `force: true` is
  // needed because the hover-swap icon (burger-hover) sits on top of the
  // default icon and intercepts pointer events outside of a real mouse hover.
  await page.getByAltText('burger', { exact: true }).click({ force: true })

  await page.getByRole('link', { name: 'EN', exact: true }).click()

  await expect(page).toHaveURL(/\/en\/about/)
})
