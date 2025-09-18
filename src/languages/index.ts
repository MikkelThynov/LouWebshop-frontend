import da from "./da"
import en from "./en"

const languages = { da, en }

export function t(lang: keyof typeof languages, section: string, key: string) {
  return (
    (languages[lang] as any)?.[section]?.[key] ||
    (languages.en as any)[section]?.[key] ||
    key
  )
}

export default languages
