import useNews from "../../hooks/useNews";
import { Chart } from "react-google-charts";


const ReactChart = () => {
    const [news]= useNews();
    const newsTimes = news.filter(item => item.publisher === "The New York Times")
    const newsGuardian = news.filter(item => item.publisher === "The Guardian")
    const newsWashington = news.filter(item => item.publisher === "The Washington Post")
    const newsLondon = news.filter(item => item.publisher === "The Times of London")
    const newsMonde = news.filter(item => item.publisher === "Le Monde")
    const newsJournal = news.filter(item => item.publisher === "The Wall Street Journal")


    const data = [
        ["Task", "Hours per Day"],
        ["The New York Times", newsTimes.length],
        ["The Guardian",newsGuardian.length],
        ["The Washington Post", newsWashington.length],
        ["The Times of London", newsLondon.length],
        ["The Monde", newsMonde.length],
        ["The Wall Street Journal", newsJournal.length],
      ];

      const options = {
        title: "Chart by publisher",
      };
    return (
        <div>

     <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>
    );
};

export default ReactChart;