import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Trash2, UploadCloud } from "lucide-react";
import { ChangeEvent, useState, useCallback } from "react";
import AutoFormLabel from "../common/label";
import AutoFormTooltip from "../common/tooltip";
import { AutoFormInputComponentProps } from "../types";

export default function AutoFormFile({
  label,
  isRequired,
  fieldConfigItem,
  fieldProps,
  field,
}: AutoFormInputComponentProps) {
  const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps;
  const showLabel = _showLabel === undefined ? true : _showLabel;
  const [file, setFile] = useState<string | null>(field.value || null);
  const [fileName, setFileName] = useState<string | null>(field.value ? "Image actuelle" : null);
  const [isDragging, setIsDragging] = useState(false);

  const processFile = (file: File) => {
    setFile(URL.createObjectURL(file));
    setFileName(file.name);
    field.onChange(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveClick = () => {
    setFile(null);
    field.onChange("");
  };

  return (
    <FormItem>
      {showLabel && (
        <AutoFormLabel
          label={fieldConfigItem?.label || label}
          isRequired={isRequired}
        />
      )}
      {!file && (
        <FormControl>
          <div
            className={`flex flex-col items-center justify-center w-full min-h-32 border-2 border-dashed rounded-lg cursor-pointer bg-background transition-colors ${isDragging ? "border-emerald-500 bg-emerald-50/50" : "border-border hover:bg-muted/50"
              }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragEnter={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
            onDrop={handleDrop}
            onClick={() => document.getElementById(`file-upload-${field.name}`)?.click()}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 pointer-events-none text-center px-4">
              <UploadCloud className="w-8 h-8 mb-3 text-muted-foreground" />
              <p className="mb-2 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Cliquez pour téléverser</span> ou glisser-déposer
              </p>
              <p className="text-xs text-muted-foreground">PNG, JPG ou WEBP (max. 2MB)</p>
            </div>
            <Input
              id={`file-upload-${field.name}`}
              type="file"
              className="hidden"
              {...fieldPropsWithoutShowLabel}
              onChange={handleFileChange}
              value={""}
            />
          </div>
        </FormControl>
      )}
      {file && (
        <div className="flex h-[40px] w-full flex-row items-center justify-between space-x-2 rounded-sm border p-2 bg-background focus-visible:ring-0 focus-visible:ring-offset-0">
          <p className="truncate text-sm font-medium">{fileName}</p>
          <button onClick={handleRemoveClick} aria-label="Remove image" className="text-destructive hover:text-destructive/80 transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
      )}
      <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
      <FormMessage />
    </FormItem>
  );
}
