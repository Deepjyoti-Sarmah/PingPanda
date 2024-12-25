import { LoadingSpinner } from '@/components/loading-spinner'
import { client } from '@/lib/client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const DashboardPageContent = () => {

  const { data: categories, isPending: isEventCategoriesLoading } = useQuery({
    queryKey: ["user-event-categories"],
    queryFn: async () => {
      const res = await client.category.getEventCategories.$get()
      return await res.json()
    },
  })

  if (isEventCategoriesLoading) {
    return (
      <div className='flex items-center justify-center flex-1 h-full w-full'>
        <LoadingSpinner />
      </div>

    )
  }

  // if (!categories || categories.length === 0) {
  //   return <DashboardEmptyState />
  // }

  return (
    <div>DashboardPageContent</div>
  )
}

export default DashboardPageContent
