import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSetting } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: editSettings, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newSettingsData }) => updateSetting(newSettingsData),

    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      //   reset();
      //   setShowForm(false);
    },
    onError: (err) => {
      toast.error("Cabin could not be created", err.message);
    },
  });

  return { isUpdating, editSettings };
}
