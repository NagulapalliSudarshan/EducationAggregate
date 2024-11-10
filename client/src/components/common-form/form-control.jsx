import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { RadioGroup,RadioGroupItem } from '../ui/radio-group'

const FormControls = ({ formControls = [], formData, setFormData }) => {
    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const renderComponentByType = (getControlItem) => {
        let element = null        
        
        switch(getControlItem.componentType){
            case 'input':
                element = <Input 
                    id={getControlItem.name}
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                    type={getControlItem.type}
                />
                break;
            case 'select':
                element = <Select>
                    <SelectTrigger className='w-full'>
                            <SelectValue placeholder={getControlItem.label}/>
                    </SelectTrigger>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={getControlItem.label} />
                    </SelectTrigger>
                    <SelectContent>
                        {getControlItem.options && getControlItem.options.length > 0
                            ? getControlItem.options.map((optionItem) => (
                                <SelectItem key={optionItem.id} value={optionItem.id}>
                                {optionItem.label}
                                </SelectItem>
                            ))
                            : null}
                    </SelectContent>
                </Select>
                break;
            case 'textarea':
                element = <Textarea 
                    id={getControlItem.name}
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                />
                break;
            case 'radio-group':
                element = 
                    <RadioGroup
                        className="flex flex-col gap-2"
                        
                        onValueChange={(value) => handleInputChange(getControlItem.name, value)}
                    >
                        {getControlItem.options?.map((optionItem) => (
                            <div key={optionItem.value} className="flex items-center gap-2">
                                <RadioGroupItem
                                    value={optionItem.value}
                                    id={`${getControlItem.name}-${optionItem.value}`}
                                />
                                <Label htmlFor={`${getControlItem.name}-${optionItem.value}`}>
                                    {optionItem.label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                break;
            default:
                element = <Input 
                    id={getControlItem.name}
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                    type={getControlItem.type}
                />
        }
        return element
    }
    
    return (
        <div className="flex flex-col gap-3">
          {formControls.map((controleItem) => (
            <div key={controleItem.name}>
              <Label htmlFor={controleItem.name}>{controleItem.label}</Label>
              {renderComponentByType(controleItem)}
            </div>
          ))}
        </div>
    )
}

export default FormControls
