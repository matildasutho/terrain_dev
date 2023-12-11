import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProjects } from "../../api/contenful/utils";

import styles from "./calendar.module.css";

const CalendarPage = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();
  const [year, setYear] = useState(currentYear);
  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
  const [projects, setProjects] = useState([]);

  const getMonthName = (monthIndex) => {
    const date = new Date(2000, monthIndex, 1); // You can use any year here
    const options = { month: "long" };
    return date.toLocaleString("en-US", options).toUpperCase();
  };

  const decreaseMonth = () => {
    if (monthIndex > 0) {
      setMonthIndex(monthIndex - 1);
    } else {
      setMonthIndex(11); // Set month to December
      setYear(year - 1); // Decrement year
    }
  };

  const increaseMonth = () => {
    if (monthIndex < 11) {
      setMonthIndex(monthIndex + 1);
    } else {
      setMonthIndex(0); // Set month to January
      setYear(year + 1); // Increment year
    }
  };

  const [mobileView, setMobileView] = useState(false);
  const monthsToShow = 6;

  useEffect(() => {
    // Check the viewport width to determine mobile view
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getNextMonths = (startMonth, times) => {
    const nextMonths = [];
    let currentMonth = startMonth;
    for (let i = 0; i < times; i++) {
      nextMonths.push(currentMonth);
      currentMonth = (currentMonth + 1) % 12; // Increment month (loop around if December)
    }
    return nextMonths;
  };

  const nextMonthsIndexes = getNextMonths(monthIndex, monthsToShow);

  useEffect(() => {
    getProjects().then((response) => {
      const filteredProjects = response.projectsCollection.items.filter(
        (project) => {
          const projectDate = new Date(project.date);
          const projectYear = projectDate.getFullYear();
          const projectMonth = projectDate.getMonth();
          return (
            nextMonthsIndexes.includes(projectMonth) && projectYear === year
          );
        }
      );
      setProjects(filteredProjects);
    });
  }, [year, nextMonthsIndexes]);

  //console.log(calendar);
  const daysOfWeek = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  // Calculate the number of days in the current month
  const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  // Calculate the starting day of the week for the 1st of the current month (0 for Sunday, 1 for Monday, etc.)
  const firstDayOfMonth = new Date(year, monthIndex, 0);
  const firstDay = firstDayOfMonth.getDay();
  // Generate an array of day numbers for the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  // Create an empty array for any empty placeholders before the 1st day
  const emptyDays = Array.from({ length: firstDay }, (_, i) => null);

  // Calculate the total number of cells needed in the grid (7 days a week for 6 rows)
  const totalCells = 7 * 6; // Assuming a maximum of 6 rows in the calendar

  // Generate an array with all cells
  const allCells = Array.from({ length: totalCells }, (_, i) => {
    if (i < firstDay || i >= firstDay + daysInMonth) {
      return null; // Placeholder for empty cells before the first day and after the last day of the month
    } else {
      return i - firstDay + 1; // Day number for the current month
    }
  });

  // Split the array into chunks of 7 to represent each row in the calendar
  const calendarGrid = [];
  for (let i = 0; i < totalCells; i += 7) {
    calendarGrid.push(allCells.slice(i, i + 7));
  }

  return (
    <div className={styles["container"]}>
      {/* <div className={styles["column"]}>
        <span className={styles["rotation"]}>
          <h1>CALENDAR</h1>
        </span>
      </div> */}
      <div className={styles["column"]}>
        <div className={styles["calendarPage"]}>
          {mobileView ? (
            <div className={styles["calendarMobile"]}>
              <div className={styles["mob-month"]}>
                <span>
                  <span
                    className={styles["btn-access"]}
                    onClick={decreaseMonth}
                  >
                    &lt;
                  </span>
                </span>

                <span>
                  <span>{getMonthName(monthIndex)}</span>
                </span>

                <span>
                  <span
                    className={styles["btn-access"]}
                    onClick={increaseMonth}
                  >
                    &gt;
                  </span>
                </span>
              </div>
              {projects.map((project, index) => (
                <div>
                  <Link
                    to={`/event/${project.slug}`}
                    className={styles["linktext"]}
                  >
                    <div key={index} className={styles["eventItem"]}>
                      {project.title}

                      <span className={styles["formattedHours"]}>
                        {new Date(project.date).getHours()}H
                      </span>
                      <span></span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles["calendar"]}>
              <div className={styles["title-box"]}>
                {daysOfWeek.map((day, index) => (
                  <div key={index} className={styles["day-title"]}>
                    {day}
                  </div>
                ))}
              </div>
              <div className={styles["day-box"]}>
                {calendarGrid.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <div
                        key={`${rowIndex}-${cellIndex}`}
                        className={styles["each-day"]}
                      >
                        {cell !== null ? (
                          <>
                            <div className={styles["day-number"]}>{cell}</div>
                            {projects.map((project, projectIndex) => {
                              const projectDate = new Date(project.date);
                              const projectDay = projectDate.getDate();
                              const projectHours = projectDate.getHours();
                              const formattedHours = `${projectHours}h`;

                              if (projectDay === cell) {
                                return (
                                  <div key={projectIndex}>
                                    <Link
                                      to={`/event/${project.slug}`}
                                      className={styles["linktext"]}
                                    >
                                      {project.title} - {formattedHours}
                                    </Link>
                                  </div>
                                );
                              } else {
                                return null;
                              }
                            })}
                          </>
                        ) : (
                          <div className={styles["empty-cell"]} />
                        )}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>

              <div className={styles["monthSelector"]}>
                <div className={styles["monthInner"]}>
                  <span>
                    <span
                      className={styles["btn-access"]}
                      onClick={decreaseMonth}
                    >
                      &lt;
                    </span>
                  </span>

                  <span>
                    <span>{getMonthName(monthIndex)}</span>
                  </span>

                  <span>
                    <span
                      className={styles["btn-access"]}
                      onClick={increaseMonth}
                    >
                      &gt;
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
