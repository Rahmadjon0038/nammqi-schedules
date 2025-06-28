'use client'
import React, { useState, useEffect } from 'react'
import {
  Wrapper,
  SelectBox,
  Dropdown,
  Option,
  SearchInput,
  Container,
  DateInput,
  StyledSelect
} from './style'

import { useBuildings } from '@/hooks/useBuildings'
import { IoIosArrowDown } from "react-icons/io"
import ScheduleTable from './schedule/ScheduleTable'
import WeekSchedules from './weekSchedule/WeekSchedules'

function getLocalDate(date = new Date()) {
  const offset = date.getTimezoneOffset()
  const local = new Date(date.getTime() - offset * 60 * 1000)
  return local.toISOString().split('T')[0]
}

function getWeekRange(today = new Date()) {
  const day = today.getDay()
  const diffToMonday = day === 0 ? -6 : 1 - day
  const monday = new Date(today)
  monday.setDate(today.getDate() + diffToMonday)

  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)

  return {
    startDate: getLocalDate(monday),
    endDate: getLocalDate(sunday),
  }
}

function Shedules() {
  const { data } = useBuildings()
  const [select, setSelect] = useState(null)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const [shift, setShift] = useState(1)
  const [weekType, setWeekType] = useState('odd')

  const { startDate: defaultStart, endDate: defaultEnd } = getWeekRange()
  const [startDate, setStartDate] = useState(defaultStart)
  const [endDate, setEndDate] = useState(defaultEnd)

  useEffect(() => {
    if (data?.buildings?.length) {
      const savedID = localStorage.getItem('selected-building-id')
      const found = data.buildings.find(b => b.id === savedID)
      setSelect(found || data.buildings[0])
    }
  }, [data])

  const handleSelect = (building) => {
    setSelect(building)
    localStorage.setItem('selected-building-id', building.id)
    setOpen(false)
    setSearch("")
  }

  const filteredData = data?.buildings?.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Container>
        <Wrapper>
          <SelectBox onClick={() => setOpen(!open)}>
            {select?.name ? select.name : "Binoni tanlang"} <IoIosArrowDown />
          </SelectBox>

          {open && (
            <Dropdown>
              <SearchInput
                type="text"
                placeholder="Qidiruv..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {filteredData?.length ? filteredData.map((i) => (
                <Option key={i.id} onClick={() => handleSelect(i)}>
                  {i.name}
                </Option>
              )) : (
                <Option disabled>Topilmadi</Option>
              )}
            </Dropdown>
          )}

          <StyledSelect value={shift} onChange={(e) => setShift(Number(e.target.value))}>
            <option value={1}>1-smena</option>
            <option value={2}>2-smena</option>
          </StyledSelect>

          <StyledSelect value={weekType} onChange={(e) => setWeekType(e.target.value)}>
            <option value="odd">Toq hafta</option>
            <option value="even">Juft hafta</option>
            <option value="both">Ikkalasi</option>
          </StyledSelect>

          <DateInput type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <DateInput type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </Wrapper>
      </Container>
      
      {select?.id && (
        <ScheduleTable
          buildingID={select.id}
          shift={shift}
          weekType={weekType}
          startDate={startDate}
          endDate={endDate}
        />
      )}

      {/* {select?.id && (
        <WeekSchedules
          buildingID={select.id}
          shift={shift}
          startWeek={startDate} // startDate ni API ga startWeek deb jo'natamiz
        />
      )} */}

    </>
  )
}

export default Shedules
