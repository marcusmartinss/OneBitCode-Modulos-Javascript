export async function getSentryNeo() {
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=50&api_key=DEMO_KEY")

    const result = await response.json();

    return result.sentry_objects
}