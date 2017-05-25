#pragma once

#include <set>

using std::set;

class CategorySet{
  
  CategorySet(set<Category> categories,set<FutureAction> actions):
    categories(categories),
    actions(actions){
      for(const Category& category : categories){
        for(const string& action_name : categories.action_names){
          actions_by_category[category] =
        }
      }
    }

  map<Category, set<FutureAction>> actions_by_category;
  
};
