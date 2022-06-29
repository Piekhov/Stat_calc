import React from 'react';
import {useSelector} from 'react-redux';
import useCarCalculation from '../hooks/useCarCalculation';
import usePhoneCalculation from '../hooks/usePhoneCalculation';
import useShoesCalculation from '../hooks/useShoesCalculation';
import useSuitCalculation from '../hooks/useSuitCalculation';
import useTieCalculation from '../hooks/useTieCalculation';
import useVacationCalculation from '../hooks/useVacationCalculation';
import useWalletCalculation from '../hooks/useWalletCalculation';
import useWatchCalculation from '../hooks/useWatchCalculation';


function ItemsForm () {
    
    const salary = useSelector((state) => state.items.salary)
    const {car, car_m, car_d} = useCarCalculation(salary)
    const {suit, suit_m, suit_d} = useSuitCalculation(salary)
    const {watch, watch_m, watch_d} = useWatchCalculation(salary)
    const {shoes, shoes_m, shoes_d} = useShoesCalculation(salary)
    const {tie, tie_m, tie_d} = useTieCalculation(salary)
    const {phone, phone_m, phone_d} = usePhoneCalculation(salary)
    const {vacation, vacation_m, vacation_d} = useVacationCalculation(salary)
    const {wallet, wallet_m, wallet_d} = useWalletCalculation(salary)
    return (
        <div className='style3'>
            <table>  
                <tr bgcolor="lavender" height="40" >
                    <th width="200px" colSpan={2}>Смета имиджа</th>       
                    <th width="500px">Фишка (пунктик, конек, циклик, хобби и т.д.)</th>
                    <th width="100px">в месяц</th>
                </tr>
                <tr bgcolor="honeydew">
                    <td>Автомобиль</td>
                    <td type="text"> {car} </td>
                    <td> {car_d} </td> 
                    <td>{car_m}</td>     
                </tr>
                <tr bgcolor="honeydew">
                    <td>Костюм</td>
                    <td type="text" > {suit} </td>
                    <td> {suit_d} </td>
                    <td> {suit_m} </td>     
                </tr>
                <tr bgcolor="honeydew">
                    <td>Часы</td>
                    <td> {watch} </td>
                    <td> {watch_d} </td>
                    <td> {watch_m} </td>       
                </tr>
                <tr bgcolor="honeydew">
                    <td>Обувь</td>
                    <td> {shoes} </td>     
                    <td> {shoes_d} </td>
                    <td> {shoes_m} </td> 
                </tr>
                <tr bgcolor="honeydew">
                    <td>Галстуки</td>
                    <td> {tie} </td>      
                    <td> {tie_d} </td>
                    <td> {tie_m} </td> 
                </tr>
                <tr bgcolor="honeydew">
                    <td>Телефон</td>
                    <td> {phone} </td>
                    <td> {phone_d} </td>
                    <td> {phone_m} </td>     
                </tr>
                <tr bgcolor="honeydew">
                    <td>Отдых</td>
                    <td> {vacation} </td>
                    <td> {vacation_d} </td>
                    <td> {vacation_m} </td>      
                </tr>
                <tr bgcolor="honeydew">
                    <td>Бумажник</td>
                    <td> {wallet} </td>     
                    <td> {wallet_d} </td>
                    <td> {wallet_m} </td> 
                </tr>
                <tr bgcolor="lavender" height="30">
                    <td>Цена имиджа</td>
                    <td > {car+suit+watch+shoes+tie+phone+vacation+wallet} </td>     
                    <td></td>
                    <td> {car_m+suit_m+watch_m+shoes_m+tie_m+phone_m+vacation_m+wallet_m} </td> 
                </tr>
            </table>
        </div> 
        
    )
    
}

export default ItemsForm

