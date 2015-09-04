"""brainfart URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'brainfart_app.views.home_page', name='home'),
    url(r'^$', 'brainfart_app.views.index', name='index'),
    url(r'^home', 'brainfart_app.views.home_page', name='home'),
    url(r'^api/v1/model/$', 'brainfart_app.views.api_model_category', name='index'),
    url(r'^api/v1/model/items/', 'brainfart_app.views.api_model_item', name='index'),
    url(r'^category/', 'brainfart_app.views.category_page', name='category'),
    url(r'^inventory/', 'brainfart_app.views.inventory_page', name='inventory'),
    url(r'^index/', 'brainfart_app.views.index', name='index'),
    url(r'^category_list_page/', 'brainfart_app.views.category_list_page', name='category_list'),
    url(r'^category_detail_page/', 'brainfart_app.views.category_detail_page', name='category_detail'),
    url(r'^item_list_page/', 'brainfart_app.views.item_list_page', name='item_list'),
    url(r'^item_quantity_page/', 'brainfart_app.views.item_quantity_page', name='item_quantity'),
    url(r'^table/', 'brainfart_app.views.table_test', name='table'),
    url(r'^admin/', include(admin.site.urls)),
)
