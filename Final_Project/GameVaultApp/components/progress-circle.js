import Svg, { Circle } from 'react-native-svg';

export default function ProgressCircle({
  completed,
  inProgress,
  total,
  radius = 60,
  strokeWidth = 10,
}) {
  const circumference = 2 * Math.PI * radius;

  const completedLength = (completed / total) * circumference;
  const inProgressLength = (inProgress / total) * circumference;

  return (
    <Svg
    width={(radius + strokeWidth) * 2}
    height={(radius + strokeWidth) * 2} >
      {/* Background circle / Not Started */}
      <Circle
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius}
        stroke="#787878"
        strokeWidth={strokeWidth}
        fill="none" />

      {/* Completed */}
      <Circle
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius}
        stroke="green"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={`${completedLength} ${circumference}`}
        transform={`rotate(-90 ${radius + strokeWidth} ${radius + strokeWidth})`} />

      {/* In Progress */}
      <Circle
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius}
        stroke="blue"
        strokeWidth={strokeWidth}
        fill="none"
        transform={`rotate(-90 ${radius + strokeWidth} ${radius + strokeWidth})`}
        strokeDasharray={`${inProgressLength} ${circumference}`}
        strokeDashoffset={-completedLength} />
    </Svg>
  );
}