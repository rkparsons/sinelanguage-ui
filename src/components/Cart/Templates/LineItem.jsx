import React from 'react'

export default () => (
    <item-line>
        <li className="snipcart__item__line snipcart__box">
            <div className="snipcart__item__line__product">
                <div className="snipcart__item__line__header">
                    <h2 className="snipcart__item__line__header__title">{`{{ item.name }}`}</h2>

                    <item-quantity
                        className="snipcart__item__line__quantity"
                        v-if="!adding"
                    ></item-quantity>
                    <div className="snipcart__item__line__header__actions">
                        <remove-item-action className="snipcart__button--icon">
                            <icon name="trash" className="icon--red" alt="item.remove_item"></icon>
                        </remove-item-action>
                    </div>
                </div>
            </div>
        </li>
    </item-line>
)
