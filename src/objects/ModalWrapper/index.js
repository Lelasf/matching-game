import './style.css'
import RestartButton from '../../components/RestartButton'
import ModalMessage from '../../components/ModalMessage'
import TrophyIcon from '../../components/TrophyIcon'

function ModalWrapper() {
  return /*html*/ `
    <section class="modal-wrapper">
      <div class='modal'>
        ${ModalMessage()}
        ${TrophyIcon()}
        ${RestartButton()}
      </div>
    </section>
  `
}

export default ModalWrapper
