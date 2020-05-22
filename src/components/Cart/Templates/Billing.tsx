import Billing from '../Elements/Billing'
import React from 'react'
import SnipcartCheckbox from '../Elements/SnipcartCheckbox'
import SnipcartInput from '../Elements/SnipcartInput'
import SnipcartLabel from '../Elements/SnipcartLabel'

export default () => (
    <>
        <Billing section="top">
            <fieldset className="snipcart-form__set">
                <div className="snipcart-form__field">
                    <SnipcartLabel
                        className="snipcart__font--tiny"
                        forInput="phone"
                        text="Phone number"
                    />
                    <SnipcartInput name="phone" />
                </div>
            </fieldset>
        </Billing>
        <Billing section="bottom">
            <fieldset className="snipcart-form__set">
                <div className="snipcart-form__field-checkbox">
                    <SnipcartCheckbox name="subscribeToNewsletter" />
                    <SnipcartLabel
                        className="snipcart__font--tiny snipcart-form__label--checkbox"
                        forInput="subscribeToNewsletter"
                        text="Subscribe to newsletter"
                    />
                </div>
            </fieldset>
        </Billing>
    </>
)
