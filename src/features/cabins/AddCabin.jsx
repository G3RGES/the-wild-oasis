import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowForm((show) => !show)}>
        Add New Cabin
      </Button>

      {showForm && <CreateCabinForm setShowForm={setShowForm} />}
    </div>
  );
}

export default AddCabin;
