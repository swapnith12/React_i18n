import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../lib/redux'
import { createUser } from '../lib/redux'
import type { User } from '../lib/types'
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"



export function JobSelection() {
    const [user, setUser] = useState<User>({})
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const {t} = useTranslation()

    const onHandleChange = (fieldName: keyof User, value: string) => {
        setUser((prev) => ({
            ...prev,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(
            createUser({
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            })
        )
        console.log(user.firstName)
        navigate("/jobs")
    }
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{t('greeting')}</CardTitle>
                <CardDescription>
                    {t('enter_name')}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="FirstName">{t('firstname')}</Label>
                            <Input
                                id="FirstName"
                                type="text"
                                placeholder={t('firstname')}
                                onChange={(e) => onHandleChange("firstName", e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="LastName">{t('lastname')}</Label>
                            </div>
                            <Input id="LastName"
                                type="text"
                                placeholder={t('lastname')}
                                onChange={(e) => onHandleChange("lastName", e.target.value)}
                                required />
                        </div>
                        <div className="grid gap-3">
                            <Label>{t('role')}</Label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Driver"
                                    onChange={(e) =>
                                        onHandleChange("role", e.target.value)
                                    }
                                />
                                {t('driver')}
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Mechanic"
                                    onChange={(e) =>
                                        onHandleChange("role", e.target.value)
                                    }
                                />
                                {t('mechanic')}
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Plumber"
                                    onChange={(e) =>
                                        onHandleChange("role", e.target.value)
                                    }
                                />
                                {t('plumber')}
                            </label>
                        </div>

                        {/* Single Submit */}
                        <Button variant='outline' type="submit" className="w-full">
                            {t('submit')}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
