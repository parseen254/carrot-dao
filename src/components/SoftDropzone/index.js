import { useEffect, useRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Dropzone components
import Dropzone from "dropzone";

// Dropzone styles
import "dropzone/dist/dropzone.css";

// React Project components
import SoftBox from "components/SoftBox";

// Custom styles for the SoftDropzone
import SoftDropzoneRoot from "components/SoftDropzone/SoftDropzoneRoot";

function SoftDropzone({ options }) {
  const dropzoneRef = useRef();

  useEffect(() => {
    Dropzone.autoDiscover = false;

    function createDropzone() {
      return new Dropzone(dropzoneRef.current, { ...options });
    }

    function removeDropzone() {
      if (Dropzone.instances.length > 0) Dropzone.instances.forEach((dz) => dz.destroy());
    }

    createDropzone();

    return () => removeDropzone();
  }, [options]);

  return (
    <SoftDropzoneRoot
      component="form"
      action="/file-upload"
      ref={dropzoneRef}
      className="form-control dropzone"
    >
      <SoftBox className="fallback">
        <SoftBox component="input" name="file" type="file" multiple />
      </SoftBox>
    </SoftDropzoneRoot>
  );
}

// Typechecking props for the SoftDropzone
SoftDropzone.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SoftDropzone;
