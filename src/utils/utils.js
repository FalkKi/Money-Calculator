
export const calcMoneySumm = (userMoneyInfo) => {
   const userTotalMoneyArray = [];
   for (const [key, value] of Object.entries(userMoneyInfo)) {
      userTotalMoneyArray.push(value)
   };
   const userTotalMoney = userTotalMoneyArray.reduce((acc, el) => acc + el.moneyAmount, 0);
   return userTotalMoney;
};

export const groupByCategory = (dateExpenses, categories) => {
   const categoriesMap = dateExpenses.map(el => {
      const category = categories.find(c => c.id === el.category);
      return {
         name: category?.name || '',
         value: el.value
      }
   });

   const categoryByGroup = categoriesMap.reduce((group, el) => {
      const category = el.name;
      group[category] = group[category] || [];
      group[category].push(el);
      return group;
   }, {});

   const moneyData = [];
   for (const [key, value] of Object.entries(categoryByGroup)) {
      const newObject = {
         name: key,
         value: value.reduce((sum, c) => sum += c.value, 0)
      }
      moneyData.push(newObject);
   };
   return moneyData;
};