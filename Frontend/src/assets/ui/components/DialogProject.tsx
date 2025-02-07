import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
 
export function DialogProject({ projecto, onClose, alerta }) {
 
  const handleClose = () => {
    onClose();
  };

  const handleAlerta = () => {
    alerta();
    handleClose();
  };
  return (
    <>
      <Dialog size="sm" open={true} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-40" >
        <div className="max-w-lg p-5 bg-white rounded-lg ">
          <DialogHeader className="relative block m-0">
          <Typography variant="h4" color="blue-gray">
            Invertir en {projecto.nombre}
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Completa el formulario para invertir en este proyecto
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleClose}
          >
            <XMarkIcon className="w-4 h-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="pb-6 space-y-4">
            <Input label="Monto a invertir" type="number" />
        </DialogBody>
        <DialogFooter className="flex justify-end space-x-2">
          <Button variant="text" className="hover:text-red-400" color="red" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className=" bg-[#00B4D8] hover:bg-[#1f8498]" variant="gradient" color="green" onClick={handleAlerta}>
            Invertir
          </Button>
        </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}

export default DialogProject;