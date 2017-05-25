#pragma once

#include <set>

#include "FutureAction.h"

using std::set;

struct Category{
  
  Category(string title, string iconURL, set<string> action_names):
    title(title),
    iconURL(iconURL),
    action_names(action_names){}
  
  string title;
  string iconURL;
  set<string> action_names;
};
