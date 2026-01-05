import { ScrollArea } from "@/components/ui/scroll-area"
import { JobCard } from "./jobCard"
import { useSelector } from "react-redux"
import type { RootState } from "@/lib/redux"
import { useQuery } from "@tanstack/react-query"
import type { Jobs } from "@/lib/types"
import { useTranslation } from "react-i18next"

type JobsResponse={
  default:Jobs
}
export default function Jobs() {
  const role = useSelector((state: RootState) => state.user.role)
  const {t} = useTranslation()

  const getJobs = async (): Promise<JobsResponse> => {
    console.log(role)
    const url = `/api/${role}/jobs`
    const res = await fetch(url)
    if (!res.ok) throw new Error("Failed to fetch jobs")
    const data = await res.json()
    return data
  }

  const { data, error, isLoading } = useQuery<JobsResponse, Error>({
    queryKey: ["job", role],
    queryFn: getJobs,
  })

  if (isLoading) return <div>Loading jobs...</div>
  if (error) return <div>Error loading jobs</div>
  console.log(data)
  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="p-4 space-y-4">
        <h4 className="text-sm font-bold">{t('jobs')}</h4>

        {data?.default.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </ScrollArea>
  )
}
