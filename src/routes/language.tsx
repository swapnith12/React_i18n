import i18next from "i18next"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"

const langs: any = [
    { code: 'en', language: "English" },
    { code: 'hi', language: "हिंदी" }
]


function Language() {
    const navigate = useNavigate()
    const onHandleClick = (Langcode: any) => {
        i18next.changeLanguage(Langcode)
        navigate("/jobSelection")
    }
    return (
        <div className='flex flex-col'>
            {langs.map((lang: any) => {
                return (
                    <Button className="mb-2" variant="outline" key={lang.code} onClick={() => onHandleClick(lang.code)}>{lang.language}</Button>
                )
            })}
        </div>
    )
}

export default Language
