import { useState } from 'react'

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const openModal = () => {
    setIsOpenModal(true)
  }

  return { isOpenModal, openModal, closeModal }
}

export default useModal
