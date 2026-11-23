export const getPosts = async (queryParams) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/posts?${new URLSearchParams(queryParams)}`

  console.log('Request URL:', url)

  const res = await fetch(url)

  console.log('Status:', res.status)
  console.log('Response URL:', res.url)
  console.log('Content Type:', res.headers.get('content-type'))

  const data = await res.text()

  console.log('Response Body:', data)

  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`)
  }

  return JSON.parse(data)
}

export const createPost = async (post) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
  return await res.json()
}