// 🔹 Reusable Input + Slider (fixed alignment and input handling)
const InputWithSlider = ({ label, min, max, step, value, setValue, prefix }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Update input value when slider value changes (only if not focused)
  useEffect(() => {
    if (!isFocused) {
      setInputValue(value[0].toString());
    }
  }, [value, isFocused]);

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setInputValue(rawValue);
    
    let val = parseInt(rawValue) || 0;
    if (val < min) val = min;
    if (val > max) val = max;
    setValue([val]);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setInputValue(value[0].toString());
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    // Format the final value
    let val = parseInt(inputValue) || 0;
    if (val < min) val = min;
    if (val > max) val = max;
    setValue([val]);
    setInputValue(val.toString());
  };

  const displayValue = isFocused 
    ? inputValue 
    : `${prefix}${value[0].toLocaleString("en-IN")}`;

  return (
    <div className="space-y-2">
      {/* Label + Input in same row */}
      <div className="flex justify-between items-center">
        <Label className="text-base font-semibold">{label}</Label>
        <Input
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={`${prefix}${min.toLocaleString("en-IN")}`}
          className="w-32 text-left px-2 py-1 h-8 border"
        />
      </div>

      {/* Slider */}
      <Slider
        value={value}
        onValueChange={setValue}
        min={min}
        max={max}
        step={step}
        className="flex-1"
      />

      {/* Min & Max in same row */}
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          {prefix}
          {min.toLocaleString("en-IN")}
        </span>
        <span>
          {prefix}
          {max.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
};

export default InputWithSlider