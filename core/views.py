from django.shortcuts import render
from django.views import generic


class IndexView(generic.TemplateView):

    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        return render(request, template_name=self.template_name, context={})
