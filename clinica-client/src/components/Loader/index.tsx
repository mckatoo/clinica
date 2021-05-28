import theme from 'styles/theme'

const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
  >
    <title>Loading...</title>
    <circle
      cx="50"
      cy="50"
      r="0"
      fill="none"
      stroke={theme.colors.primary}
      strokeWidth="2"
    >
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        values="0;40"
        keyTimes="0;1"
        keySplines="0 0.2 0.8 1"
        calcMode="spline"
        begin="0s"
      />
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1s"
        values="1;0"
        keyTimes="0;1"
        keySplines="0.2 0 0.8 1"
        calcMode="spline"
        begin="0s"
      />
    </circle>
    <circle
      cx="50"
      cy="50"
      r="0"
      fill="none"
      stroke={theme.colors.lightBg}
      strokeWidth="2"
    >
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        values="0;40"
        keyTimes="0;1"
        keySplines="0 0.2 0.8 1"
        calcMode="spline"
        begin="-0.5s"
      />
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1s"
        values="1;0"
        keyTimes="0;1"
        keySplines="0.2 0 0.8 1"
        calcMode="spline"
        begin="-0.5s"
      />
    </circle>
  </svg>
)

export default Loader
