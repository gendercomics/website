// Checks out the gendercomics/content repo into .content/ for local dev and tests.
// CI does the same via actions/checkout. Usage: CONTENT_REF=<branch|sha> pnpm run content-website
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'

const repo = process.env.CONTENT_REPO ?? 'https://github.com/gendercomics/content.git'
const ref = process.env.CONTENT_REF ?? 'main'
const dir = '.content'

const git = (...args) => execFileSync('git', args, { stdio: 'inherit' })

if (!existsSync(`${dir}/.git`)) {
  git('clone', '--quiet', repo, dir)
}
git('-C', dir, 'fetch', '--quiet', 'origin', ref)
git('-C', dir, 'checkout', '--quiet', '--detach', 'FETCH_HEAD')
console.log(`content checked out at ${ref} into ${dir}/`)
