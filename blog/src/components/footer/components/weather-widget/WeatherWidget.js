import { useState, useEffect } from "react";
import { WEATHER_URL } from "../../../../constants";
import styled from "styled-components";

const Widget = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  gap: 12px;
  min-width: 150px;
  min-height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* чтобы дата была справа над виджетом */
`;

const Temp = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const City = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Condition = styled.div`
  font-size: 13px;
  opacity: 0.8;
`;

const DateText = styled.div`
  font-size: 14px;
  color: #555;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  text-align: right;
  user-select: none;
`;

export const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function loadWeather() {
      try {
        const res = await fetch(WEATHER_URL);
        const { current, location } = await res.json();

        const { temp_c, condition } = current;
        const { text, icon } = condition;
        const { name, country } = location;

        setWeather({
          city: name,
          country,
          temperature: Math.round(temp_c),
          weatherText: text,
          weatherIcon: "https:" + icon,
        });
      } catch (error) {
        console.error(error);
      }
    }
    loadWeather();
  }, []);

  if (!weather) return;

  const { city, country, temperature, weatherIcon, weatherText } = weather;

  const today = new Date().toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Wrapper>
      <DateText>{today}</DateText>
      <Widget>
        <img src={weatherIcon} alt={weatherText} width="48" height="48"></img>
        <Temp>{temperature}°</Temp>
        <Info>
          <City>
            {city} {country}
          </City>
          <Condition>{weatherText}</Condition>
        </Info>
      </Widget>
    </Wrapper>
  );
};
