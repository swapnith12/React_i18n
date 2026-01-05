import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { Button } from "@/components/ui/button";
import type { Job} from "@/lib/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type JobCardProps={
    job:Job
}

export const JobCard = ({job}:JobCardProps) => {
   const [submitted,setSubmitted] = useState(false)
   const {t} = useTranslation()
   const onHandleClick=()=>{
    setSubmitted((prev)=>!prev)
   }
    return(
    <Card data-testid="job-card" className="text-white bg-blue-500 w-80 font-bold border-4 hover:bg-blue-200 hover:text-black
                  transform transition-transform duration-300 hover:scale-105">
        <CardHeader>
            <CardTitle>{t(`${job.role}`.toLowerCase())}</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{t(`${job.payment}`.toLowerCase())}</p>
            <p>{t(`${job.companyName}`.toLowerCase())}<span>{job.verifiedCompany?`  ✅${t('verified')}`:`  ⌛${t('not_verified')}`}</span></p>
        </CardContent>
        <CardFooter>
            <Button variant="outline" className="w-full" onClick={()=>onHandleClick()}>{submitted?`${t("applied")}`:`${t('apply')}`}</Button>
        </CardFooter>
    </Card>
    )
}