export const getDangerouslyHtml = (data?: string) => {
  return { __html: data || '' }
}
