import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
  const {
    public: { posthogKey, posthogHost },
  } = useRuntimeConfig()

  if (import.meta.dev || !posthogKey) {
    return
  }

  posthog.init(posthogKey, {
    api_host: posthogHost,
    // Cookieless/anonymous tracking to avoid requiring a cookie-consent banner:
    // no persistent identity, nothing written to cookies or localStorage.
    persistence: 'memory',
    person_profiles: 'never',
    disable_session_recording: true,
  })

  // Stage and production share one PostHog project, so tag events with
  // their origin to filter/breakdown dashboards by environment.
  const environment = window.location.hostname.startsWith('stage.')
    ? 'staging'
    : 'production'
  posthog.register({ environment })
})
