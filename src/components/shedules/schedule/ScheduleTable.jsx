import React from 'react'
import { useGetschedules } from '@/hooks/addBildings'
import { StyledTable, TableWrapper, Td, Th } from './style'

// 📅 Hafta kunlari
const daysOfWeek = [
  { eng: 'Monday', uz: 'Dushanba' },
  { eng: 'Tuesday', uz: 'Seshanba' },
  { eng: 'Wednesday', uz: 'Chorshanba' },
  { eng: 'Thursday', uz: 'Payshanba' },
  { eng: 'Friday', uz: 'Juma' },
  { eng: 'Saturday', uz: 'Shanba' },
]

const lessonSlots = [1, 2, 3, 4, 5, 6]

// 📅 Sana formatlash
const formatDate = (iso) => {
  const [y, m, d] = iso.split('-')
  return `${d}.${m}.${y}`
}

function ScheduleTable({ buildingID, shift, weekType, startDate, endDate }) {
  const { data: schedule, isLoading, error } = useGetschedules({
    buildingID,
    shift,
    weekType,
    startDate,
    endDate,
  })

  if (isLoading) return <div>📦 Jadval yuklanmoqda...</div>
  if (error) return <div>❌ Xatolik yuz berdi</div>
  if (!schedule?.days || Object.keys(schedule.days).length === 0) return <div>ℹ️ Ma’lumot topilmadi</div>

  return (
    <TableWrapper>
      <h3 className="mb-6 text-xl font-bold text-center">
        🏫 {schedule.buildingName || "Bino"} | 🕘 {schedule.shift}-smena | 📅 {schedule.weekType === 'even' ? 'Juft hafta' : 'Toq hafta'}
      </h3>
      <p className="text-sm text-center text-gray-600 mb-10">
        Davr: {formatDate(schedule.startDate)} — {formatDate(schedule.endDate)}
      </p>

      <StyledTable>
        <thead>
          <tr>
            <Th>Soat</Th>
            {daysOfWeek.map(({ uz }) => (
              <Th key={uz}>{uz}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lessonSlots.map((slot) => (
            <tr key={slot}>
              <Td><strong>{slot}</strong></Td>
              {daysOfWeek.map(({ eng }) => {
                const lesson = schedule.days[eng]?.[slot]
                return (
                  <Td key={eng}>
                    {lesson ? (
                      <div>
                        <div className="font-semibold">{lesson.subject}</div>
                        <div className="text-gray-600 text-sm">
                          {lesson.type} | {lesson.group}
                        </div>
                        <div className="text-gray-700 text-sm">{lesson.teacher}</div>
                        <div className="text-blue-700 text-sm">{lesson.auditorium}</div>
                      </div>
                    ) : (
                      <div className="text-gray-300">—</div>
                    )}
                  </Td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}

export default ScheduleTable
