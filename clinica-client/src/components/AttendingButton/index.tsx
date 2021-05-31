import Button, { ButtonProps } from 'components/Button'

// import { Task, TaskX } from '@styled-icons/boxicons-regular'
import { Task } from '@styled-icons/boxicons-regular'

// import { useAttending } from 'hooks/use-attending'

type AttendingButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const AttendingButton = ({
  // id,
  size = 'small',
  hasText = true
}: AttendingButtonProps) => {
  // const { isInAttending, addToAttending, removeFromAttending } = useAttending()
  // const ButtonText = isInAttending(id) ? 'Remove from attending' : 'Add to attending'
  const ButtonText = 'Add to attending'

  return (
    <Button
      icon={<Task />}
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
