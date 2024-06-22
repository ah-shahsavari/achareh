export const useFetchAchareh = async (path, options = {}) => {
  const config = useRuntimeConfig()
  return await useFetch(() => `${config.public.apiBase}/${path}`, {
    ...options, headers: {
      Authorization: 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4'
    }
  })
}