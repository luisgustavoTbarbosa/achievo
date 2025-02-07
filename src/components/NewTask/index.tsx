import { Dialog } from "radix-ui";
import { NewTaskButton, DialogOverlay, DialogContent } from "./style";

export function NewTask () {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewTaskButton>
          Nova tarefa
        </NewTaskButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <Dialog.Title>Nova tarefa</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <Dialog.Close>Fechar</Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}