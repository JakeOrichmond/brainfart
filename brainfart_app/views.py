from django.shortcuts import render
from .models import *
from django.template import loader, RequestContext
from django.http import HttpResponse
from django.http import *
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from .models import FoodItem
import json


# Create your views here.

def index(request):
    return render(request, "index.html", {})


@csrf_exempt
def api_model_category(request):
    if request.POST:
        print(request.POST)
        item = FoodCategory()
        item.category_name = request.POST["name"]
        item.save()
        item_json = json.dumps({
            "id": item.id,
            "name": item.category_name
        })
        return HttpResponse(item_json, content_type="application/json")
    item_list = FoodCategory.objects.order_by("-id")

    item_list_simple = []

    for item in item_list:
        item_list_simple.append({
            "id": item.id,
            "name": item.category_name
        })
    all_data = {
        "Categories": item_list_simple
    }
    json_response = json.dumps(all_data)

    return HttpResponse(json_response, content_type="application/json")


# Fill in with FoodItem Model like you did with category above
@csrf_exempt
def api_model_item(request):
    if request.POST:
        print(request.POST)
        id = request.POST["id"]
        if id == "0":
            item = FoodItem()
        else:
            item = FoodItem.objects.filter(id=id)[0]
        if request.POST["action"] == "delete":
            item.delete()
            return HttpResponse(item_json, content_type="application/json")
        else:
            item.item_name = request.POST["name"]
            item.quantity_id = int(request.POST["quantity"])
            category_id = int(request.POST["category_id"])
            category_list = FoodCategory.objects.filter(id = category_id)
            item.food_category = category_list[0]
            item.save()
            item_json = json.dumps({
                "id": item.id,
                "category_id": item.food_category.id,
                "name": item.item_name,
                "quantity": item.quantity_id
            })
        return HttpResponse(item_json, content_type="application/json")
    item_list = FoodItem.objects.order_by("-id")

    item_list_simple = []

    for item in item_list:
        item_list_simple.append({
            "id": item.id,
            "category_id": item.food_category.id,
            "name": item.item_name,
            "quantity": item.quantity_id
        })
    all_data = {
        "items": item_list_simple
    }
    json_response = json.dumps(all_data)

    return HttpResponse(json_response, content_type="application/json")


def home_page(request):
    home_page = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/home_page.html')
    context = RequestContext(request, {
        'home_page': home_page,
    })
    return HttpResponse(template.render(context))


def inventory_page(request):
    inventory_page = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/inventory_page.html')
    context = RequestContext(request, {
        'inventory_page': inventory_page,
    })
    return HttpResponse(template.render(context))


def category_page(request):
    category_page = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/category_page.html')
    context = RequestContext(request, {
        'category_page': category_page,
    })
    return HttpResponse(template.render(context))


def index(request):
    index = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/index.html')
    context = RequestContext(request, {
        'index': index,
    })
    return HttpResponse(template.render(context))


def table_test(request):
    table_test = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/table_test.html')
    context = RequestContext(request, {
        'table_test': table_test,
    })
    return HttpResponse(template.render(context))


def category_list_page(request):
    category_list_page = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/category_list_page.html')
    context = RequestContext(request, {
        'category_list_page': category_list_page,
    })
    return HttpResponse(template.render(context))


def category_detail_page(request):
    category_detail_page = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/category_detail_page.html')
    context = RequestContext(request, {
        'category_detail_page': category_detail_page,
    })
    return HttpResponse(template.render(context))


def item_list_page(request):
    item_list_page = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/item_list_page.html')
    context = RequestContext(request, {
        'item_list_page': item_list_page,
    })
    return HttpResponse(template.render(context))


def item_quantity_page(request):
    item_quantity_page = FoodItem.objects.all()
    template = loader.get_template('brainfart_app/item_quantity_page.html')
    context = RequestContext(request, {
        'item_quantity_page': item_quantity_page,
    })
    return HttpResponse(template.render(context))