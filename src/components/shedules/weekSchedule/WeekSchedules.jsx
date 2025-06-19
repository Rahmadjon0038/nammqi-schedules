import React from "react";
import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/api/api";
import { Container, EmptyText, RoomTitle, Td, Th,Table} from "./style";

const dayMap = {
  Monday: "Dushanba",
  Tuesday: "Seshanba",
  Wednesday: "Chorshanba",
  Thursday: "Payshanba",
  Friday: "Juma",
  Saturday: "Shanba",
  Sunday: "Yakshanba",
};
// ⛓ API dan ma'lumot olish
const fetchWeeklySchedule = async ({ queryKey }) => {
  const [_key, { buildingID, shift, startWeek }] = queryKey;
  const params = new URLSearchParams({
    buildingID,
    shift: shift.toString(),
  });
  if (startWeek) params.append("startWeek", startWeek);

  const response = await instance.get(`/api/db/schedules/weekly?${params}`);
  return response.data;
};

const WeekSchedules = ({ buildingID, shift = 1, startWeek }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["weeklySchedule", { buildingID, shift, startWeek }],
    queryFn: fetchWeeklySchedule,
  });

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timeSlots = [0, 1, 2, 3, 4, 5]; // 6 ta dars

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (isError) return <p>Xatolik yuz berdi</p>;

  return (
    <div>
      {Object.entries(data.lessons).map(([room, schedule]) => (
        <Container key={room}>
          <RoomTitle>Xona: {room}</RoomTitle>
          <Table>
            <thead>
              <tr>
                <Th>Soat</Th>
                {days.map((day) => (
                  <Th key={day}>{dayMap[day]}</Th> // 🇺🇿 Ko‘rsatish
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slotIndex) => (
                <tr key={slotIndex}>
                  <Td>{slotIndex + 1}</Td>
                  {days.map((day) => {
                    const lesson = schedule[day]?.[slotIndex]; // ❗️Xavfsiz tekshirish
                    return (
                      <Td key={day}>
                        {lesson ? (
                          <div>
                            <strong>{lesson.subject}</strong>
                            <br />
                            <small>{lesson.teacher}</small>
                          </div>
                        ) : (
                          <EmptyText>Bo'sh</EmptyText>
                        )}
                      </Td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      ))}
    </div>
  );
};

export default WeekSchedules;
