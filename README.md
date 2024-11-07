# shadcn-ui-backdrop

A React component that narrows the user&apos;s focus to a particular element on the screen

## Usage
```tsx
import { Backdrop } from "@/components/ui/backdrop"

<Backdrop 
open={open} 
onClose={handleOpen}
variant="blur"
>
<div className="animate-pulse">
  <Loader className="h-12 w-12 animate-spin text-primary" />
</div>  
</Backdrop> 
```

## Features

- Built with React and Radix UI
- Follows shadcn/ui styling conventions
- Fully accessible
- Customizable through Tailwind CSS
- TypeScript support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License
Licensed under the MIT License. See LICENSE file for details.