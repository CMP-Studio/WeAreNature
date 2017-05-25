#pragma once

#include "FutureAction.h"

struct Category{
  
  Category(string title, string iconURL, set<string> action_names):
    title(title),
    iconURL(iconURL),
    action_names(action_names){}
  
  string title;
  string iconURL;
  set<string> action_names;
};
