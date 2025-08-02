import React from 'react'
import { useGetschedules } from '@/hooks/addBildings'
import { StyledTable, TableWrapper, Td, Th } from './style'
import Loader from '@/components/loader/Loader'

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
  const { data: schedule, isLoading, error } = useGetschedules({
    buildingID,
    shift,
    weekType,
    startDate,
    endDate,
  })


  const auditoriumsSet = new Set()
  schedule && schedule?.values && Object.values(schedule?.days).forEach((day) => {
    Object?.values(day)?.forEach((lesson) => {
      if (lesson?.auditorium) auditoriumsSet.add(lesson.auditorium)
    })
  })
  const auditoriums = Array.from(auditoriumsSet)

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
            <Th>Auditoriya</Th>
            {daysOfWeek.map(({ uz }) =>
              lessonSlots.map((slot) => (
                <Th key={`${uz}-${slot}`}>
                  {uz} <br /> {slot}-par
                </Th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {auditoriums.map((auditorium) => (
            <tr key={auditorium}>
              <Td><strong>{auditorium}</strong></Td>
              {daysOfWeek.map(({ eng }) =>
                lessonSlots.map((slot) => {
                  const lesson = getLesson(eng, slot, auditorium)
                  return (
                    <Td key={`${eng}-${slot}-${auditorium}`}>
                      {lesson ? (
                        <div>
                          <div className="font-semibold">{lesson.subject}</div>
                          <div className="text-gray-600 text-sm">
                            {lesson.type} | {lesson.group}
                          </div>
                          <div className="text-gray-700 text-sm">{lesson.teacher}</div>
                        </div>
                      ) : (
                        <div className="text-gray-300">—</div>
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
