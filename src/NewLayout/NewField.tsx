import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { FormGroup } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const NewField: React.FC<any> = ({
  name,
  label,
  icon: Icon,
  optional,
  labelIcon = null,
  formProps,
  ...props
}) => {
  const [field, meta] = useField({ name, ...props });
  const [t] = useTranslation();

  return (
    <div key={name}>
      {label !== 'hidden' && (
        <label htmlFor={name}>
          {label} {labelIcon}
        </label>
      )}
      <FormGroup className={Icon ? 'position-relative has-icon-left' : ''} {...formProps}>
      <input
            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
            type='file'
          />
        {Icon && (
          <div className="form-control-position">
            <Icon size={15} />
          </div>
        )}
        <ErrorMessage name={field.name}>
          {(msg: any) => <span className="field-error text-danger">{t(msg)}</span>}
        </ErrorMessage>
      </FormGroup>
    </div>
  );
};

export { NewField };
