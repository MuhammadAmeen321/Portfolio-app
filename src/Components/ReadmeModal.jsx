function ReadmeModal({ project, readmeState, readmeContent, onClose, ui }) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="readme-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="readme-title"
      onClick={onClose}
    >
      <div className="readme-modal__panel" onClick={(event) => event.stopPropagation()}>
        <div className="readme-modal__header">
          <h4 id="readme-title">
            {project.title} {ui.modalTitleSuffix}
          </h4>
          <button type="button" className="readme-modal__close" onClick={onClose}>
            {ui.closeButtonText}
          </button>
        </div>
        {readmeState === "loading" && <p className="readme-state">{ui.loadingText}</p>}
        {readmeState === "error" && <p className="readme-state">{ui.errorText}</p>}
        {readmeState === "ready" && <pre className="readme-content">{readmeContent}</pre>}
      </div>
    </div>
  );
}

export default ReadmeModal;
