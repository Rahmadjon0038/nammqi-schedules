import React from 'react'
import {
  TableWrapper,
  DayColumn,
  LessonCell,
  LessonsGrid,
} from './style'
import { useGetschedules } from '@/hooks/addBildings'

function ScheduleTable({ buildingID, shift, weekType, startDate, endDate }) {
  const { data: schedule, isLoading, error } = useGetschedules({
    buildingID,
    shift,
    weekType,
    startDate,
    endDate
  })

  if (isLoading) return <div>Yuklanmoqda...</div>
  if (error) return <div>Xatolik yuz berdi</div>
  if (!schedule?.days || Object.keys(schedule.days).length === 0) return <div>Ma’lumot yo‘q</div>

  const daysOfWeek = [
    { eng: 'Monday', uz: 'Dushanba' },
    { eng: 'Tuesday', uz: 'Seshanba' },
    { eng: 'Wednesday', uz: 'Chorshanba' },
    { eng: 'Thursday', uz: 'Payshanba' },
    { eng: 'Friday', uz: 'Juma' },
    { eng: 'Saturday', uz: 'Shanba' },
  ]

  const lessonSlots = [1, 2, 3, 4, 5, 6]

  return (
    <TableWrapper>
      <h3 className="mb-12 text-lg font-semibold">
        Smena: {schedule.shift} | Hafta turi: {schedule.weekType === 'even' ? 'juft' : 'toq'} <br />
        ({schedule.startDate} — {schedule.endDate} oralig‘i)
      </h3>

      <LessonsGrid>
        {daysOfWeek.map(({ eng, uz }) => (
          <DayColumn key={eng}>
            <strong>{uz}</strong>
            {lessonSlots.map((slot) => {
              const lesson = schedule.days[eng]?.[slot]

              return (
                <LessonCell key={slot}>
                  {lesson ? (
                    <div>
                      <div><strong>{lesson.subject}</strong></div>
                      <div>{lesson.type} | {lesson.group}</div>
                      <div>{lesson.teacher}</div>
                      <div>{lesson.auditorium}</div>
                    </div>
                  ) : (
                    <span className="empty">—</span>
                  )}
                </LessonCell>
              )
            })}
          </DayColumn>
        ))}
      </LessonsGrid>
    </TableWrapper>
  )
}

export default ScheduleTable
