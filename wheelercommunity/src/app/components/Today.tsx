

interface TodayProps {
    daynum: number;
    link: string;
  }

const Today: React.FC<TodayProps> = ({ daynum, link }) => {
    return (
        <div>
            Day {daynum}
        </div>
        );
};

export default Today;