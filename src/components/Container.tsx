import { Box, BoxProps } from '@mui/material'

export const Container = (props: BoxProps) => {
  return (
    <Box
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        ...props.sx,
      }}
      {...props}
    />
  )
}
