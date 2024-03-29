import { classes } from "@utils";

interface ICardProps {
  titleText: string;
  subtitleText: string;
}

export default function Card(props: ICardProps) {
  const { subtitleText, titleText } = props;
  return (
    <div
      className={classes(
        "rounded-lg",
        "shadow-lg",
        "bg-gradient-to-l",
        "odd:from-blue-200",
        "odd:to-red-300",
        "even:from-red-300",
        "even:to-blue-200"
      )}
    >
      <div className={classes("p-4", "lg:p-10")}>
        <h3 className={classes("text-lg", "lg:text-xl", "font-bold")}>
          {titleText}
        </h3>
        <p className={classes("text-sm", "lg:text-lg", "text-gray-800")}>
          {subtitleText}
        </p>
      </div>
    </div>
  );
}
