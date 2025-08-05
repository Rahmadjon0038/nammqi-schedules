'use client'
import React from 'react'
import { useGetschedules } from '@/hooks/addBildings'
import { StyledTable, TableWrapper, Td, Th } from './style'
import Loader from '@/components/loader/Loader'
import ViewLessonodal from './ViewModal'
import Addlesson from './Addlesson'
import { useGetAuditorium } from '@/hooks/users/useUpdateProfile'
import { useAuth } from '@/context/authContext'

const daysOfWeek = [
  { eng: 'Monday', uz: 'Dushanba' },
  { eng: 'Tuesday', uz: 'Seshanba' },
  { eng: 'Wednesday', uz: 'Chorshanba' },
  { eng: 'Thursday', uz: 'Payshanba' },
  { eng: 'Friday', uz: 'Juma' },
  { eng: 'Saturday', uz: 'Shanba' },
]

const lessonSlots = [1, 2, 3, 4, 5, 6]

function ScheduleByAuditorium({ buildingID, shift, weekType, startDate, endDate }) {
  const { role } = useAuth()
  const { data: schedule, isLoading, error } = useGetschedules({
    buildingID,
    shift,
    weekType,
    startDate,
    endDate,
  })

  const { data: Auditurium } = useGetAuditorium(schedule?.buildingID);
  const auditoriumsSet = new Set()
  schedule && schedule?.days && Object.values(schedule?.days).forEach((day) => {
    Object.values(day).forEach((lesson) => {
      if (lesson?.auditorium) auditoriumsSet.add(lesson.auditorium)
    })
  })

  const getLesson = (day, slot, auditorium) => {
    const lesson = schedule.days?.[day]?.[slot]
    return lesson?.auditorium === auditorium ? lesson : null
  }

  if (isLoading) return <Loader />
  if (error) return <div>Xatolik yuz berdi</div>
  if (!schedule?.days || Object.keys(schedule.days).length === 0) return <div>ℹ Ma’lumot topilmadi</div>

  return (
    <TableWrapper style={{ overflowX: 'auto' }}>
      <StyledTable>
        <thead>
          <tr>
            <Th rowSpan={2}>Auditoriya</Th>
            {daysOfWeek.map(({ uz }) => (
              <Th key={uz} colSpan={lessonSlots.length} >
                {uz}
              </Th>
            ))}
          </tr>
          <tr>
            {daysOfWeek.map(({ uz }) =>
              lessonSlots.map((slot) => (
                <Th key={`${uz}-${slot}`}>
                  {slot}-par
                </Th>
              ))
            )}
          </tr>
        </thead>

        <tbody>
          {Auditurium?.auditoriums?.map((auditorium, index) => (
            <tr key={auditorium.id || index}>
              <Td><strong>{auditorium.name}</strong></Td>
              {daysOfWeek.map(({ eng }) =>
                lessonSlots.map((slot) => {
                  const lesson = getLesson(eng, slot, auditorium.name)
                  return (
                    <Td key={`${eng}-${slot}-${auditorium.id}`}>
                      {lesson ? (
                        <ViewLessonodal schedule={{ day: eng, slot, auditorium, lesson }} />
                      ) : (
                        role === "admin" ? <Addlesson data={auditorium} />  :"----"
                      )}
                    </Td>
                  )
                })
              )}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}

export default ScheduleByAuditorium
