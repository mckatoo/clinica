// import { Task, TaskX } from '@styled-icons/boxicons-regular'
import Button, { ButtonProps } from 'components/Button'
// import { useAttending } from 'hooks/use-attending'

type AttendingButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const AttendingButton = ({
  // id,
  size = 'small',
  hasText = false
}: AttendingButtonProps) => {
  // const { isInAttending, addToAttending, removeFromAttending } = useAttending()
  // const ButtonText = isInAttending(id) ? 'Remove from attending' : 'Add to attending'
  const ButtonText = 'Add to attending'

  return (
    <Button
      // icon={isInAttending(id) ? <TaskX /> : <Task />}
      size={size}
      // onClick={() => (isInAttending(id) ? removeFromAttending(id) : addToAttending(id))}
      aria-label={ButtonText}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default AttendingButton
