import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal handleSetOpenModal={setOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
